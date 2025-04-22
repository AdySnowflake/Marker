## ✅ **从头开始构建 Tauri 项目的完整流程（优化版）**

---

### **步骤 1：克隆项目**

```sh
git clone https://github.com/tk04/Marker.git
cd Marker
```

---

### **步骤 2：安装前端依赖**

```sh
pnpm install
```

---

### **步骤 3：重新安装 esbuild**

```sh
交互式操作
a y
```

---

### **步骤 4：更新 Browserslist 数据（可选）**

```sh
npx update-browserslist-db@latest
```

---

### **步骤 5：进入 `src-tauri` 目录并更新 Rust 依赖**

```sh
cd src-tauri
cargo update
```

---

### **步骤 6：修复 Rust 代码中的警告**

```sh
cargo fix --allow-dirty
```

---

### **步骤 7：返回项目根目录**

```sh
cd ..
```

---

### **步骤 8：设置私钥环境变量**

在不同系统下，使用对应的命令设置 `TAURI_PRIVATE_KEY` ：

- **Windows CMD**
    
    ```sh
    set TAURI_PRIVATE_KEY=你的私钥内容
    ```
    
- **Windows PowerShell**
    
    ```powershell
    $env:TAURI_PRIVATE_KEY="你的私钥内容"
    ```
    
- **Linux/macOS（Bash/Zsh）**
    
    ```sh
    export TAURI_PRIVATE_KEY="你的私钥内容"
    ```
    

---

### **步骤 9：构建 Tauri 应用**

```sh
npx tauri build
```

---

### **步骤 10：验证构建结果**

查看输出目录：

```
Marker/src-tauri/target/release/bundle/
```

---

### **说明**

- 这个流程确保了所有前端、Rust 依赖和构建工具都是最新的，并且修复了 Rust 代码中的警告。
- **私钥环境变量**是必须的，否则可能会导致构建失败。
- PowerShell 和 CMD 设置环境变量的方式不同，确保你使用正确的命令。
- 如果遇到任何问题，随时告诉我，我可以帮你排查和优化！🚀

这样就包含了 PowerShell 设置私钥的命令，并且流程更完整了！🎯

### **最终推荐的构建顺序**

```sh
git clone https://github.com/tk04/Marker.git
cd Marker

pnpm install                        # 1. 安装前端依赖
pnpm approve-builds                 # 2. 重新安装 esbuild（可省）

npx update-browserslist-db@latest    # 3. 更新 Browserslist 数据

cd src-tauri
cargo update                         # 4. 更新 Rust 依赖
cargo fix --allow-dirty               # 5. 修复 Rust 代码

cd ..
npx tauri build                      # 6. 构建 Tauri 应用
```

# 测试
```
pnpm approve-builds

pnpm add esbuild --allow-build=esbuild


cd ..
Remove-Item -Recurse -Force Marker
git clone https://github.com/tk04/Marker.git
cd Marker


git clone https://github.com/AdySnowflake/Marker.git
cd Marker
```

```
   = note: this is an inference error on crate `time` caused by an API change in Rust 1.80.0; update `time` to version `>=0.3.35` by calling `cargo update`

For more information about this error, try `rustc --explain E0282`.
error: could not compile `time` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
       Error failed to build app: failed to build app

```