import { Container, Users, BookOpen, Play, CheckCircle, ArrowRight } from 'lucide-react';
export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Container className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">DockerCourse</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Cursos</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Recursos</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Container className="h-4 w-4 mr-2" />
            Curso Profesional
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bienvenido al Curso de 
            <span className="text-blue-600 block">Docker by LEXIS</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Domina la containerización y despliega aplicaciones de manera eficiente. 
            Aprende Docker desde cero hasta convertirte en un experto con proyectos reales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center shadow-lg">
              <Play className="h-5 w-5 mr-2" />
              Comenzar Ahora
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-lg">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600 font-medium">Estudiantes Activos</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600 font-medium">Lecciones Prácticas</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600 font-medium">Tasa de Éxito</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Por qué elegir nuestro curso?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Container className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aprendizaje Práctico</h3>
                  <p className="text-gray-600">Proyectos reales y ejercicios hands-on para aplicar lo aprendido inmediatamente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidad Activa</h3>
                  <p className="text-gray-600">Únete a miles de desarrolladores que aprenden y crecen juntos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificación</h3>
                  <p className="text-gray-600">Obtén un certificado reconocido al completar el curso exitosamente.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contenido del Curso</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Fundamentos de Containerización</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Docker Compose y Orquestación</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Despliegue en Producción</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Mejores Prácticas de Seguridad</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Kubernetes e Integración</span>
              </li>
            </ul>
            
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold mt-8 hover:bg-gray-100 transition-colors flex items-center justify-center">
              Ver Programa Completo
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar tu journey con Docker?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a miles de desarrolladores que han transformado su carrera
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
            Inscribirme Ahora
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Container className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">DockerCourse</h3>
              </div>
              <p className="text-gray-400">
                La plataforma líder para aprender Docker y containerización.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Cursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Docker Básico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Docker Avanzado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kubernetes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DockerCourse. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
