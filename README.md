<img width="3584" height="1184" alt="Gemini_Generated_Image_la0rhula0rhula0r" src="https://github.com/user-attachments/assets/054b5a02-c24c-4384-a367-dd948b7ce30f" />

# 📱 React Native + AI Stajyer Projesi

**Ai Günlük Asistanım** mini proje olarak geliştirilmiş, yapay zeka destekli bir mobil günlük uygulamasıdır.

## 📖 Proje Özeti

Kullanıcının yazdığı cümleleri AI ile analiz eden ve AI'dan yanıt alan bir mobil uygulamadır. Uygulama, metin tabanlı bir **'akıllı asistan'** deneyimi sunacak şekilde tasarlanmış olup, tamamen **ücretsiz servislerle** çalışmaktadır.

**Proje Konusu:** "AI Günlük Asistanım"

Kullanıcı her gün uygulamaya bir cümle veya duygu yazısı girer (örneğin: _"Bugün motive hissediyorum ama biraz yorgunum."_). Uygulama bu cümleyi analiz eder ve şu çıktıları verir:

- **Duygu Analizi:** Pozitif / Nötr / Negatif
- **Basit Özet:** (ör. _"Bugün genel olarak olumlu bir gün geçirmişsin."_)
- **Öneri:** (ör. _"Kendine 10 dakikalık bir mola verebilirsin."_)

## 🛠️ Teknolojiler

Projede kullanılan teknolojiler ve kategorileri aşağıdadır:

| **Kategori** | **Teknoloji** |
| --- | --- |
| **Mobil Platform** | React Native CLI (JavaScript) |
| **State Yönetimi** | Context API (Native) |
| **AI Entegrasyonu** | Hugging Face Inference API (Qwen/Qwen2.5-7B-Instruct) |
| **Veri Saklama** | AsyncStorage (Lokal) |
| **UI Kütüphanesi** | React Native Paper |
| **HTTP İstekleri** | Axios |
| **Env Yönetimi** | react-native-dotenv |

## 🌟 Özellikler (MVP)

### 1\. Günlük Girdi Ekranı

- Kullanıcı gününü anlatan bir cümle yazar.
- 'Analiz Et' butonuna tıklandığında AI API çağrısı yapılır.
- Ekranda sentiment (duygu) sonucu, özet ve AI önerisi gösterilir.

### 2\. Geçmiş Ekranı

- AsyncStorage üzerinde lokal olarak saklanan geçmiş girdiler listelenir.
- Her girdi, duygu durumuna göre renklendirilmiş kartlar veya ikonlar ile gösterilir.
- Haftalık döngü (Pazartesi - Pazar) baz alınarak listeleme yapılır.

### 3\. Basit UI / UX

- Kullanıcı dostu, sade ve anlaşılır arayüz.
- Duygu durumuna göre dinamik arka plan veya kart rengi değişimi (ör. Negatif = Kırmızımsı, Pozitif = Yeşilimsi).
- Ana sayfa (Vitrin), Günlük ve Geçmiş sekmeleri arasında kolay navigasyon.

### 4\. Offline Çalışma

- İnternet bağlantısı olmasa bile kullanıcı daha önce kaydettiği analizlere ve geçmiş kayıtlarına erişebilir.

## 🤖 AI Araç Kullanım Dokümantasyonu

Bu projenin geliştirilme sürecinde kod kalitesini artırmak ve hata ayıklamak amacıyla yapay zeka araçlarından faydalanılmıştır.

- **Google Gemini:** Kod mimarisinin oluşturulması (Component/Screen ayrımı), React Native sürüm hatalarının (Native Module uyumsuzlukları) giderilmesi ve .gitignore / README.md dosyalarının hazırlanmasında kullanılmıştır.
- **Hugging Face API:** Uygulamanın çekirdek özelliği olan metin analizi için Qwen/Qwen2.5-7B-Instruct modeli kullanılmıştır.

## 🚀 Kurulum ve Çalıştırma Adımları

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

### Ön Hazırlık

- Node.js ve npm yüklü olmalıdır.
- React Native CLI geliştirme ortamı (Android Studio veya Xcode) kurulu olmalıdır.
- Hugging Face üzerinden alınmış ücretsiz bir API Token.

### Adım 1: Repoyu Klonlayın
```bash
git clone https://github.com/Burak3745/ai-daily-assistant.git
cd ai-daily-assistant
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
npm install  
```

### Adım 3: API Anahtarını Ayarlayın

Projenin ana dizininde .env adında bir dosya oluşturun ve Hugging Face API anahtarınızı ekleyin:
```env
HF_API_KEY=hf_SizinTokenKodunuzBuraya  
```

### Adım 4: Uygulamayı Başlatın

**Android:**
```bash
npx react-native start --reset-cache
``` 
Yeni bir terminalde:  
```bash
npx react-native run-android  
```

**iOS (Mac gerektirir):**
```bash
cd ios && pod install && cd ..  
npx react-native run-ios  
```

## 📸 Ekran Görüntüleri

<p align="center">
  <img src="https://github.com/user-attachments/assets/c7078226-f4aa-4aae-9a1e-5080c32592ae" width="190" />
  <img src="https://github.com/user-attachments/assets/cf60aa5f-8f79-4e38-b472-44fd67e7d976" width="190" />
  <img src="https://github.com/user-attachments/assets/532eb829-9671-4d4a-a3b4-f747b830dfeb" width="190" />
  <img src="https://github.com/user-attachments/assets/cd3e784b-2560-405b-ba78-62751bcd18c7" width="190" />
  <img src="https://github.com/user-attachments/assets/9dcea6bf-37c3-4a3c-ace0-86c97b9154e9" width="190" />
</p>

## 🎥 Çalışır Demo

https://github.com/user-attachments/assets/491bdb7b-8a3a-4719-bb1f-c70e5327165c



