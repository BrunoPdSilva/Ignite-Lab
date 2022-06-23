import { Logo_Rocket } from "./Logo_Rocket";

export function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-gray-600 mx-6">
      <div className="flex items-center py-6">
        <Logo_Rocket />
        <span className="ml-6 text-gray-300">Rocketseat - Todos os direitos reservados</span>
      </div>
      <a href="#">
        <span className="text-gray-300">Políticas de privacidade</span>
      </a>
    </div>
  )
}