import React from 'react'
import './index.scss'
import { useBreadcrumbs } from '@/router/breadcrumb';

const GlobalContentTitle: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='global-content-title-container'>
      <div className="title-box">{breadcrumbs[breadcrumbs.length - 1]?.title}</div>
      <div className="slot-box"></div>
    </div>
  )
}

export default GlobalContentTitle;
