import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './DocSidebar.module.css';

interface SidebarItem {
  label: string;
  href: string;
  items?: SidebarItem[];
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface DocSidebarProps {
  sections: SidebarSection[];
  currentPath?: string;
}

function SidebarSection({ title, items, currentPath }: { title: string; items: SidebarItem[]; currentPath?: string }) {
  return (
    <div className={styles.sidebarSection}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.sectionList}>
        {items.map((item) => (
          <li key={item.href} className={styles.sectionItem}>
            <Link
              to={item.href}
              className={`${styles.sectionLink} ${currentPath === item.href ? styles.activeLink : ''}`}
            >
              {item.label}
            </Link>
            {item.items && item.items.length > 0 && (
              <ul className={styles.subsectionList}>
                {item.items.map((subItem) => (
                  <li key={subItem.href} className={styles.subsectionItem}>
                    <Link
                      to={subItem.href}
                      className={`${styles.subsectionLink} ${currentPath === subItem.href ? styles.activeLink : ''}`}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DocSidebar({ sections, currentPath }: DocSidebarProps): ReactNode {
  return (
    <nav className={styles.sidebar}>
      {sections.map((section) => (
        <SidebarSection
          key={section.title}
          title={section.title}
          items={section.items}
          currentPath={currentPath}
        />
      ))}
    </nav>
  );
} 