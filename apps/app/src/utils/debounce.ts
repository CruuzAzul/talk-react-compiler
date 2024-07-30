/* eslint-disable @typescript-eslint/no-explicit-any */
// Implementation credits: https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940?permalink_comment_id=3062135#gistcomment-3062135
export function debounce<F extends (...params: any[]) => void>(fn: F, waitFor = 300) {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return function (this: any, ...args: Parameters<F>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), waitFor);
    };
  }
  
