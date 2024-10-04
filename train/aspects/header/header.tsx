import { Header as SparksHeader } from '@bitdesign/sparks.layout.header';
import { Link } from '@bitdesign/sparks.navigation.link';
import { ReactNode } from "react";
import { Action } from "./action.js";
import { HeaderLink } from "./content.js";
import { HeaderType } from './header-type.js';

export type HeaderProps = {
  /**
   * header links.
   */
  links?: HeaderLink[];

  /**
   * list of actions to use.
   */
  actions?: Action[];

  /**
   * logo to use.
   */
  logo: ReactNode;

  /**
   * header component to use.
   * defaults to sparks.
   */
  HeaderComponent?: HeaderType;

  /**
   * contents to render instead of
   * header links.
   */
  contents?: ReactNode;
};

export function Header({ links, actions, logo, HeaderComponent = SparksHeader, contents }: HeaderProps) {
  const actionComponents = actions.map((action) => {
    return action.component;
  });

  return (
    <HeaderComponent actions={actionComponents} logo={logo}>
      {contents}
      {!contents && links.map((link, key) => {
        return <Link key={key} href={link.href}>{link.label}</Link>
      })}
    </HeaderComponent>
  );
}