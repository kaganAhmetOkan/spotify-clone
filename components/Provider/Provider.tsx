import { Provider } from "jotai";

export default function Providers(
  { children }: { readonly children: React.ReactNode }
  ) {
  return (
    <Provider>
      {children}
    </Provider>
  );
};