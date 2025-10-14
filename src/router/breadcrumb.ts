import { useMatches, useParams, matchPath } from 'react-router';

export const breadcrumbMappings: { [key: string]: string | ((params: any) => string) } = {
  '/': '首页',
  '/article': '文章管理',
  '/article/:id': (params) => `文章详情（ID: ${params.id}）`, // 动态路由支持参数
};

/**
 * 为单个路径匹配对应的面包屑名称
 * @param {string} path 路由路径（如 '/users/123'）
 * @param {Object} params 路由参数（来自 useParams）
 * @returns {string|undefined} 面包屑名称
 */
const getBreadcrumbForPath = (path: string, params: any): string | undefined => {
  // 遍历映射表，用 matchPath 匹配动态路由规则
  for (const [rule, nameOrFn] of Object.entries(breadcrumbMappings)) {
    // 用路由规则（如 '/users/:id'）匹配当前路径（如 '/users/123'）
    const match = matchPath(rule, path);
    if (match) {
      // 若匹配，处理名称（函数则传入 params，否则直接返回）
      return typeof nameOrFn === 'function' ? nameOrFn(params) : nameOrFn;
    }
  }
  return undefined; // 无匹配时返回 undefined
};

/**
 * 生成面包屑数据
 * @returns {Array} 面包屑数组，每项包含 { title, path }
 */
export const useBreadcrumbs = (): Array<{ title: string; path: string }> => {
  const matches = useMatches(); // 获取所有匹配的路由记录
  const params = useParams(); // 获取动态路由参数（如 :id）
  const breadcrumbs = [];

  for (const match of matches) {
    const { pathname } = match; // 每个层级的完整路径（如 '/users/:id'）
    const breadcrumbName = getBreadcrumbForPath(pathname, params);

    if (breadcrumbName) {
      breadcrumbs.push({
        title: breadcrumbName,
        path: pathname // 用于跳转的路径（支持动态路由规则）
      });
    }
  }

  return breadcrumbs;
};