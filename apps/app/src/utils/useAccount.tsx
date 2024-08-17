import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { AppwriteException, Models } from "appwrite";
import { account } from "../api/appwrite";

type UserType = Models.User<Models.Preferences> | null;

type AccountState = {
  user: Models.User<Models.Preferences> | null | undefined;
  loading: boolean;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
};

const AccountContext = createContext<AccountState>({
  user: null,
  loading: true,
  login: async () => {},
});

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>(null);
  const [loading, setLoading] = useState(true);

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    account.createEmailPasswordSession(username, password).then(async () => {
      await loadAccount();
    });
  };

  const loadAccount = async () => {
    try {
      const loadedAccount = await account.get();
      setUser(loadedAccount);
    } catch (error) {
      const appwriteException = error as AppwriteException;
      console.error(appwriteException.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadAccount();
  }, []);

  return (
    <AccountContext.Provider
      value={{
        user,
        loading,
        login,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext<AccountState>(AccountContext);
};
