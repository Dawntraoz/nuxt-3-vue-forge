import butter from 'buttercms'
const butterCMS = butter('3083dce7e35eea649511101bf0dad90099363a46')
import { ref } from 'vue'

const useButter = () => {
  const getLandingPage = async () => {
    const res = await butterCMS.page.retrieve('*', 'landing-page-with-components')
    return ref(res.data.data)
  }

  const getNavMenu = async () => {
    const res = await butterCMS.content.retrieve(['navigation_menu'])
    return ref(res.data.data.navigation_menu[0])
  }
  
  return {
    getLandingPage,
    getNavMenu
  }
}

export default useButter