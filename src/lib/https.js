import HttpRequest from './request'
import config from '@/config'
const productUrl = location.origin.indexOf('https') !== -1 ? `${location.origin}/index.php/` : `${location.origin}/wxxcx/index.php/`
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : productUrl
const https = new HttpRequest(baseUrl)
export default https
