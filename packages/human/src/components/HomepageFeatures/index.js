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
        Các vị trí nhân sự đang tuyển dụng
      </>
    ),
  },
  {
    title: 'About Us',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: '/blog/',
    description: (
      <>
        Thông tin về công ty
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
