import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import analyze from 'rollup-plugin-analyzer'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls
			}
		}),
		quasar({
			sassVariables: 'src/assets/quasar-variables.sass'
		}),
		analyze()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
