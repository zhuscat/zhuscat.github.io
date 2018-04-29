webpackJsonp([0x81cf84362991],{514:function(e,t){e.exports={data:{markdownRemark:{html:'<p>关于生成二维码、扫描二维码方面的知识。</p>\n<!-- more -->\n<h2>生成二维码</h2>\n<p>步骤：</p>\n<ol>\n<li>创建滤镜</li>\n<li>把相关数据给滤镜</li>\n<li>生成图片</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">// 1\nlet filter = CIFilter(name: &quot;CIQRCodeGenerator&quot;)!\nfilter.setDefaults()\n\n// 2\nlet dataString = &quot;http://zhuscat.com/&quot;\nlet data = dataString.dataUsingEncoding(NSUTF8StringEncoding)\nfilter.setValue(data, forKeyPath: &quot;inputMessage&quot;)\n\n// 3\nlet outputImage = filter.outputImage!</code></pre>\n      </div>\n<p><strong>注意：</strong>生成的图像比较模糊，需要进一步处理，可以使用以下函数（抄来的）：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">func createNonInterpolatedUIImageFromCIImge(image: CIImage, size: CGFloat) -&gt; UIImage{\n    let extent = CGRectIntegral(image.extent)\n    let scale = min(size / CGRectGetWidth(extent), size / CGRectGetHeight(extent))\n\n    // 创建 bitmap\n    let width = Int(CGRectGetWidth(extent) * scale)\n    let height = Int(CGRectGetHeight(extent) * scale)\n\n    let cs = CGColorSpaceCreateDeviceGray()\n    let bitmapRef = CGBitmapContextCreate(nil, width, height, 8, 0, cs, CGImageAlphaInfo.None.rawValue)\n    let context = CIContext(options: nil)\n    let bitmapImage = context.createCGImage(image, fromRect: extent)\n    CGContextSetInterpolationQuality(bitmapRef, CGInterpolationQuality.None)\n    CGContextScaleCTM(bitmapRef, scale, scale)\n    CGContextDrawImage(bitmapRef, extent, bitmapImage)\n    let scaledImage = CGBitmapContextCreateImage(bitmapRef)\n    return UIImage(CGImage: scaledImage!)\n}</code></pre>\n      </div>\n<h2>扫描二维码</h2>\n<p>步骤：</p>\n<ol>\n<li>创建 session</li>\n<li>添加输入设备</li>\n<li>添加输出</li>\n<li>添加视频层</li>\n<li>开始扫描</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">import UIKit\nimport AVFoundation\n\nclass ViewController: UIViewController, AVCaptureMetadataOutputObjectsDelegate {\n\n    weak var session: AVCaptureSession?\n    weak var layer: CALayer?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n\n    override func touchesBegan(touches: Set&lt;UITouch&gt;, withEvent event: UIEvent?) {\n    \t// 1\n        let session = AVCaptureSession()\n        self.session = session\n\n        // 2\n        let device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)\n        let input = try? AVCaptureDeviceInput(device: device)\n        session.addInput(input)\n\n        // 3\n        let output = AVCaptureMetadataOutput()\n        output.setMetadataObjectsDelegate(self, queue: dispatch_get_main_queue())\n        session.addOutput(output)\n        output.metadataObjectTypes = [AVMetadataObjectTypeQRCode]\n\n        // 4\n        let layer = AVCaptureVideoPreviewLayer(session: session)\n        layer.frame = view.bounds\n        view.layer.addSublayer(layer)\n        self.layer = layer\n\n        // 5\n        session.startRunning()\n    }\n\n    // 实现步骤3中需要的代理\n    func captureOutput(captureOutput: AVCaptureOutput!, didOutputMetadataObjects metadataObjects: [AnyObject]!, fromConnection connection: AVCaptureConnection!) {\n        if metadataObjects.count &gt; 0 {\n            let object = metadataObjects.last as! AVMetadataMachineReadableCodeObject\n            print(&quot;\\(object.stringValue)&quot;)\n\n            session?.stopRunning()\n\n            self.layer?.removeFromSuperlayer()\n\n        }\n    }\n}</code></pre>\n      </div>',frontmatter:{title:"二维码的生成与扫描",date:"April 25, 2016",tags:["学习笔记","技术","开发","Swift","iOS"]},fields:{slug:"/qrcode/"}}},pathContext:{slug:"/qrcode/"}}}});
//# sourceMappingURL=path---posts-qrcode-0aed6ca8b0d7a31262e6.js.map