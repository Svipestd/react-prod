import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const onToogle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToogle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};