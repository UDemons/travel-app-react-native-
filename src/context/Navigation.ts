import {createContext} from "react";

const defaultValue = { nanigation: { navigate: () => null } };

const Navigation = createContext<any>(null);

export const { Provider, Consumer } = Navigation;

export default Navigation;

