import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
  {
    title: 'Nhân sự',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: '/recruitment/intro',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: '/recruitment/intro',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}><h3>{title}</h3></Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
