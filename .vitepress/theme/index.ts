// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      const setupSidebarAccordion = () => {
        const sidebar = document.querySelector('.VPSidebar')
        if (!sidebar) return
        const groups = Array.from(
          sidebar.querySelectorAll<HTMLElement>('.VPSidebarItem.level-0.collapsible')
        )
        groups.forEach((group) => {
          const item = group.querySelector<HTMLElement>(':scope > .item')
          if (!item) return
          if ((item as any)._accordionBound) return
          ;(item as any)._accordionBound = true
          item.addEventListener('click', () => {
            requestAnimationFrame(() => {
              const expanded = !group.classList.contains('collapsed')
              if (!expanded) return
              groups.forEach((other) => {
                if (other === group) return
                if (!other.classList.contains('collapsed')) {
                  const otherItem = other.querySelector<HTMLElement>(':scope > .item')
                  otherItem?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
                }
              })
            })
          })
        })
      }
      const runFade = () => {
        const el = document.getElementById('VPContent')
        if (!el) return
        el.classList.remove('vp-fade-enter', 'vp-fade-enter-active')
        // restart animation on next frame
        void (el as HTMLElement).offsetWidth
        el.classList.add('vp-fade-enter')
        requestAnimationFrame(() => {
          el.classList.add('vp-fade-enter-active')
        })
        // cleanup after animation
        window.setTimeout(() => {
          el.classList.remove('vp-fade-enter', 'vp-fade-enter-active')
        }, 350)
      }

      // initial load
      requestAnimationFrame(() => { runFade(); setupSidebarAccordion() })
      // every route change (VitePress exposes a callback property)
      if (typeof router.onAfterRouteChanged !== 'undefined') {
        router.onAfterRouteChanged = () => { runFade(); setupSidebarAccordion() }
      } else {
        // fallback for typings that omit the property
        ;(router as unknown as { onAfterRouteChanged?: () => void }).onAfterRouteChanged = () => { runFade(); setupSidebarAccordion() }
      }
    }
  }
} satisfies Theme
