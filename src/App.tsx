import { Microscope, Sparkles, Shield, Award, Heart, Leaf, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Microscope className="w-8 h-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">PharmaCare</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Trang chủ</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Dịch vụ</a>
            <a href="#products" className="text-gray-700 hover:text-teal-600 transition-colors">Sản phẩm</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">Về chúng tôi</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Liên hệ</a>
          </div>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 hover:shadow-lg">
            Tư vấn ngay
          </button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Giải pháp <span className="text-teal-600">Dược phẩm</span> & <span className="text-teal-600">Mỹ phẩm</span> Hàng đầu
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chúng tôi cung cấp các sản phẩm dược phẩm và mỹ phẩm chất lượng cao, được nghiên cứu và phát triển bởi đội ngũ chuyên gia hàng đầu, đáp ứng mọi nhu cầu chăm sóc sức khỏe và sắc đẹp của bạn.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  Khám phá sản phẩm
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300">
                  Tìm hiểu thêm
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">15+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-gray-600">Sản phẩm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">50K+</div>
                  <div className="text-gray-600">Khách hàng</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cung cấp giải pháp toàn diện cho sức khỏe và sắc đẹp của bạn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <Microscope className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nghiên cứu & Phát triển</h3>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ chuyên gia nghiên cứu và phát triển các công thức độc quyền, đảm bảo hiệu quả và an toàn tuyệt đối cho người sử dụng.
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kiểm định chất lượng</h3>
              <p className="text-gray-600 leading-relaxed">
                Mọi sản phẩm đều trải qua quy trình kiểm định nghiêm ngặt, đạt chuẩn quốc tế GMP, FDA và được cấp phép lưu hành tại Việt Nam.
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Heart className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tư vấn chuyên môn</h3>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ dược sĩ và chuyên gia da liễu sẵn sàng tư vấn miễn phí, giúp bạn lựa chọn sản phẩm phù hợp nhất với nhu cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Danh mục sản phẩm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đa dạng sản phẩm phục vụ mọi nhu cầu chăm sóc sức khỏe và làm đẹp
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dược phẩm</h3>
              <p className="text-gray-600 text-sm mb-4">Thuốc kê đơn, thuốc không kê đơn, thực phẩm chức năng</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Xem thêm →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chăm sóc da</h3>
              <p className="text-gray-600 text-sm mb-4">Kem dưỡng, serum, mặt nạ, sữa rửa mặt cao cấp</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Xem thêm →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sức khỏe</h3>
              <p className="text-gray-600 text-sm mb-4">Vitamin, khoáng chất, thực phẩm bổ sung</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Xem thêm →</a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cao cấp</h3>
              <p className="text-gray-600 text-sm mb-4">Dòng sản phẩm premium cho nhu cầu đặc biệt</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Xem thêm →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Về PharmaCare
              </h2>
              <p className="text-xl text-teal-50 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong ngành dược phẩm và mỹ phẩm, chúng tôi tự hào là đơn vị tiên phong trong việc mang đến những giải pháp chăm sóc sức khỏe và sắc đẹp toàn diện cho người Việt Nam.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Chất lượng đảm bảo</h4>
                    <p className="text-teal-50">Sản phẩm đạt chuẩn quốc tế, được kiểm định nghiêm ngặt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Tận tâm phục vụ</h4>
                    <p className="text-teal-50">Đội ngũ chuyên nghiệp, nhiệt tình hỗ trợ 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Thân thiện môi trường</h4>
                    <p className="text-teal-50">Cam kết sử dụng nguyên liệu tự nhiên, không gây hại</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-teal-50">Khách hàng hài lòng</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-teal-50">Đơn hàng mỗi năm</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-teal-50">Chuyên gia y tế</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-teal-50">Chi nhánh toàn quốc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đội ngũ chuyên gia sẵn sàng tư vấn và giải đáp mọi thắc mắc của bạn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Điện thoại</h3>
              <p className="text-gray-600">1900 xxxx</p>
              <p className="text-gray-600">024 3xxx xxxx</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@pharmacare.vn</p>
              <p className="text-gray-600">support@pharmacare.vn</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">123 Đường ABC, Quận 1</p>
              <p className="text-gray-600">Tp. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-3xl shadow-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
              <textarea
                placeholder="Nội dung tin nhắn"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Microscope className="w-8 h-8 text-teal-400" />
                <span className="text-xl font-bold">PharmaCare</span>
              </div>
              <p className="text-gray-400">
                Giải pháp dược phẩm và mỹ phẩm hàng đầu Việt Nam
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Dược phẩm</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Mỹ phẩm</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Thực phẩm chức năng</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Chăm sóc sức khỏe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Vận chuyển</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Bảo mật thông tin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Theo dõi chúng tôi</h4>
              <p className="text-gray-400 mb-4">
                Nhận tin tức và ưu đãi mới nhất
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <span className="text-sm">YT</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PharmaCare. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
