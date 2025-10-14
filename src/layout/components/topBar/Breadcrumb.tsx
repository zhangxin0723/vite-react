import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router';
import { useBreadcrumbs } from '@/router/breadcrumb';

function itemRender(currentRoute, params, items, paths) {
  const isLast = currentRoute?.path === items[items.length - 1]?.path;

  return isLast ? (
    <span>{currentRoute.title}</span>
  ) : (
    <Link to={`${paths.join('/')}`}>{currentRoute.title}</Link>
  );
}

const BreadcrumbContent: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

  // 首页不显示面包屑
  if (location.pathname === '/' || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb itemRender={itemRender} items={breadcrumbs} />
  )
}

export default BreadcrumbContent