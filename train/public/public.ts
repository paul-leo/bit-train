// 封装一个请求
// api.js

// 基础 URL，可以根据环境变量或配置文件来设置
const BASE_URL = 'https://api.example.com/';

// 默认请求头
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  // 可以添加其他默认头，如 Authorization 等
};

/**
 * 封装的请求方法
 * @param {string} serviceName - 服务名
 * @param {string} methodName - 方法名
 * @param {Object} params - 请求参数
 * @param {Object} options - 额外的请求选项
 * @returns {Promise} - 返回请求的 Promise
 */
export const request = async (serviceName, methodName, params = {}, options:any = {}) => {
  const url = `${BASE_URL}${serviceName}/${methodName}`;

  const requestOptions = {
    method: 'POST', // 默认使用 POST 方法，可以根据需要修改
    headers: { ...DEFAULT_HEADERS, ...options.headers },
    body: JSON.stringify(params),
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

// 可选：为常用的 HTTP 方法创建便捷函数
export const get = (serviceName, methodName, params, options) => 
  request(serviceName, methodName, params, { ...options, method: 'GET' });

export const post = (serviceName, methodName, params, options) => 
  request(serviceName, methodName, params, { ...options, method: 'POST' });

export const put = (serviceName, methodName, params, options) => 
  request(serviceName, methodName, params, { ...options, method: 'PUT' });

export const del = (serviceName, methodName, params, options) => 
  request(serviceName, methodName, params, { ...options, method: 'DELETE' });