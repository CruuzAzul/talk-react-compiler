import { Query } from "appwrite";
import { Compils } from "../Compils";
import { useAccount } from "../../utils/useAccount";

export const MyCompils = () => {
  const { user } = useAccount();

  if (!user) {
    return null;
  }

  const query = [Query.equal("createdById", user?.$id)];

  return <Compils compilQueries={query} title="My Compils" />;
};
