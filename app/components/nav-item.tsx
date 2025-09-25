import { NavLink } from 'react-router'

interface Props {
  name: string
  to: string
}

export default function NavItem({ name, to }: Props) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `transition ${
          isActive ? "text-cyan-400 font-semibold" : "text-gray-200 hover:text-cyan-300"
        }`
      }
    >
      {name}
    </NavLink>
  )
}

export const navItems: Props[] = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Skill',
    to: '/skill',
  },
  {
    name: 'Projects',
    to: '/projects',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
]
