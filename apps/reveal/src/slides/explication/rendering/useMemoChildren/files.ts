import type {SandpackFiles} from "@codesandbox/sandpack-react";

const codeWithoutMemoChildren: SandpackFiles = {
	"index.js": `export const Components = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      ...
      <VerySlowComponent>
        <SomeOtherComponent />
      </VerySlowComponent>
    </>
  );
};`,
};

const codeWithMemoChildren: SandpackFiles = {
	"index.js": `const VerySlowComponentMemo = React.memo(VerySlowComponent);

const SomeOtherComponentMemo = React.memo(SomeOtherComponent);

export const Components = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      ...
      <VerySlowComponentMemo>
        <SomeOtherComponentMemo />
      </VerySlowComponent>
    </>
  );
};`,
}

const codeWithMemoAndUseMemo: SandpackFiles = {
	"index.js": `const VerySlowComponentMemo = React.memo(VerySlowComponent);

export const Components = () => {
  const [isOpen, setIsOpen] = useState(false);

  // memoize children via useMemo, not React.memo
  const child = useMemo(() => <SomeOtherComponent />, []);

  return (
    <>
      ...
      <VerySlowComponentMemo>{child}</VerySlowComponentMemo>
    </>
  );
};`,
}


export const files: SandpackFiles[] = [codeWithoutMemoChildren, codeWithMemoChildren, codeWithMemoChildren, codeWithMemoChildren, codeWithMemoAndUseMemo, codeWithMemoAndUseMemo];
