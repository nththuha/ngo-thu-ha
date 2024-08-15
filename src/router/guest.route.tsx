import { lazy } from "react";
import { Navigate } from "react-router-dom";

type GenericProps = Record<string, unknown>;
type RFC = (props?: GenericProps) => React.JSX.Element;
type NoPropsRFC = () => React.JSX.Element;
type Wrapper = React.LazyExoticComponent<RFC>;
type LazyExoticComponent = React.LazyExoticComponent<NoPropsRFC>;
type Config = {
  path: string;
  element: string | (() => JSX.Element);
  wrapper?: {
    element: Wrapper;
    props?: GenericProps;
  };
};

const ServiceWrapper = lazy(() => import("@/layouts/ServiceWrapper"));

const componentMap: Record<string, LazyExoticComponent> = {
  AboutMe: lazy(() => import("@/routes/about-me")),
  Skills: lazy(() => import("@/routes/skills")),
  Experiences: lazy(() => import("@/routes/experiences")),
  Projects: lazy(() => import("@/routes/projects")),
  ContactMe: lazy(() => import("@/routes/contact-me")),
};

const configs: Config[] = [
  {
    path: "/*",
    element: () => <Navigate to="/" />,
  },
  {
    path: "/",
    element: "AboutMe",
    wrapper: {
      element: ServiceWrapper as Wrapper,
    },
  },
  {
    path: "/skills",
    element: "Skills",
    wrapper: {
      element: ServiceWrapper as Wrapper,
    },
  },
  {
    path: "/experiences",
    element: "Experiences",
    wrapper: {
      element: ServiceWrapper as Wrapper,
    },
  },
  {
    path: "/projects",
    element: "Projects",
    wrapper: {
      element: ServiceWrapper as Wrapper,
    },
  },
  {
    path: "/contact-me",
    element: "ContactMe",
    wrapper: {
      element: ServiceWrapper as Wrapper,
    },
  },
];

export default configs.map(_buildRouteConfig);

function _buildRouteConfig(config: Config) {
  const Component =
    typeof config.element === "string"
      ? componentMap[config.element]
      : config.element;
  return {
    path: config.path,
    element: config.wrapper ? (
      <config.wrapper.element {...config.wrapper.props}>
        <Component />
      </config.wrapper.element>
    ) : (
      <Component />
    ),
  };
}
