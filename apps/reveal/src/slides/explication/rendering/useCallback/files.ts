import type {SandpackFiles} from "@codesandbox/sandpack-react";

const codeWithoutUseCallback: SandpackFiles = {
	"index.js": `function App() {
  const [count, setCount] = React.useState(0);

  function handleMegaBoost() {
    setCount((currentValue) => currentValue + 1234);
  }

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>
        Count: {count} ! Click me!
      </button>

      {/* MegaBoost est un composant pure avec React.memo */}
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}`,
};

const codeWithUseMemo: SandpackFiles = {
	"index.js": `function App() {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = React.useMemo(() => {
    return function() {
      setCount((currentValue) => currentValue + 1234);
    }
  }, []);

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>
        Count: {count} ! Click me!
      </button>

      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}`,
};

const codeWithUseCallback: SandpackFiles = {
	"index.js": `function App() {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>
        Count: {count} ! Click me!
      </button>

      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}`,
};

export const files: SandpackFiles[] = [codeWithoutUseCallback, codeWithoutUseCallback, codeWithUseMemo, codeWithUseMemo, codeWithUseCallback, codeWithUseCallback, codeWithUseCallback];
