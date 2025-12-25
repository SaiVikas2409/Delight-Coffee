import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme:{
    extend:{
      colors:{
        primary:"#F97316",
        primaryDark:"C2410c",
        secondary:'#64748b',
        darkGray:"#1a1f25",
        lightGray:"#272c35"
      },
      container:{
        center:true,
        padding:{
          DEAFULT:"1rem",
          sm:"2rem",
        }
      }
    }
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
