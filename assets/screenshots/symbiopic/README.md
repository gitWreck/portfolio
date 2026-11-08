# SymBioPic (SYMBIOPIC)

**Project Initiated**: November 27, 2023  
**Documentation Generated**: November 8, 2026  

**SymBioPic** is an Android application designed for organic gardeners and farmers. It combines **on-device machine learning (TensorFlow Lite)** for vegetable image classification with a **companion planting guide** backed by Firebase. The app identifies crops via camera or gallery and presents biological pairings—highlighting beneficial companion plants ("Benefits"), antagonistic plants ("Foes"), and planting guidelines (spacing, soil, and care).

---

## Key Features

- **Vegetable Image Classification**:
  - Capture photos with the camera or pick images from the device gallery.
  - On-device inference powered by TensorFlow Lite models (`keras.tflite` / `model_final.tflite`).
  - Supports classification across 14+ vegetable varieties (e.g., Bitter Gourd, Broccoli, Cabbage, Chili, Chinese Cabbage, Cucumber, Eggplant, Garlic, Mustard Greens, Onion, Pechay, Tomato, Black Pepper, Cauliflower).

- **Companion Planting Guide**:
  - **Beneficial Plants (Benefits)**: Synergistic crops that deter pests, enrich soil, or improve yield.
  - **Harmful Plants (Foes)**: Incompatible companion crops that stunt growth or attract mutual pests.
  - **Crop Details & Spacing**: Family classifications (e.g., *Brassica*, *Solanaceae* / Nightshades), planting tips, soil preparation, and spacing guidelines (hills × rows).

- **Vegetable Directory & Search**:
  - Searchable catalog of supported vegetables.
  - Filterable by crop classifications and search keywords.

- **User Accounts & Cloud Sync**:
  - Firebase Authentication (Registration, Login, Password Reset, Profile Management).
  - Personal **Favorites** list backed by Firebase Realtime Database for quick access in the garden.
  - Companion crop data dynamically fetched from Google Cloud Firestore.

---

## Architecture & Tech Stack

- **Platform**: Android (Min SDK: 23 / Android 6.0 Marshmallow, Target SDK: 32)
- **Language**: Java 8
- **Machine Learning**: TensorFlow Lite (`tensorflow-lite-support:0.1.0`, Android ML Model Binding)
- **Backend & Cloud**:
  - Firebase Authentication
  - Cloud Firestore (`com.google.firebase:firebase-firestore`)
  - Firebase Realtime Database (`com.google.firebase:firebase-database`)
- **UI Components & Libraries**:
  - AndroidX & Material Components
  - View Binding & Android Jetpack Fragments / ViewPager
  - Glide (`com.github.bumptech.glide:glide:4.13.0`) for image rendering
  - RecyclerView with custom adapters and filter listeners

---

## Project Structure

```text
symbiopic/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/startimageclassify/
│   │   │   │   ├── classes/          # Data models, RecyclerView adapters, utilities
│   │   │   │   ├── fragment/         # Main vegetable view, Benefits, Foes, Info tabs
│   │   │   │   ├── ml/               # TensorFlow Lite generated model bindings
│   │   │   │   ├── UpdatePEP/        # Profile, email, and password update views
│   │   │   │   ├── vegetable/        # Vegetable catalog and display activities
│   │   │   │   ├── camera.java       # ML classification logic & image processing
│   │   │   │   ├── MainActivity.java # App dashboard & navigation hub
│   │   │   │   └── ...               # Auth and activity controllers
│   │   │   ├── ml/                   # TFLite model files (*.tflite)
│   │   │   ├── res/                  # Layouts, drawables, strings, plant spacing data
│   │   │   └── AndroidManifest.xml
│   │   └── test/ / androidTest/
│   ├── build.gradle
│   └── google-services.json
├── gradle/
├── build.gradle
└── settings.gradle
```

---

## Prerequisites & Setup

1. **Android Studio**: Android Studio Chipmunk / Dolphin or newer.
2. **JDK**: Java Development Kit 8 or 11.
3. **Firebase Configuration**:
   - The project requires a configured Firebase project with **Authentication**, **Cloud Firestore**, and **Realtime Database** enabled.
   - Place your `google-services.json` inside the `app/` directory (if setting up with a new Firebase project).
4. **Hardware Requirements**:
   - An Android device or emulator with camera/gallery access and Android 6.0 (API level 23) or higher.

---

## Build and Run

1. Clone repository:
   ```bash
   git clone <repository-url>
   cd symbiopic
   ```
2. Open project in Android Studio.
3. Sync Gradle dependencies:
   ```bash
   ./gradlew build
   ```
4. Run on a connected device or emulator:
   ```bash
   ./gradlew installDebug
   ```

