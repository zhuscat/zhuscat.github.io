webpackJsonp([0xbecfc013f272],{499:function(e,n){e.exports={data:{markdownRemark:{html:'<p>UIImagePickerController 用来从拍照、照片、相簿中获取图片，看看如何使用吧。</p>\n<!-- more -->\n<h1>正文</h1>\n<h2>检测设备是否支持</h2>\n<p>UIImagePickerController 需要设置数据来源，数据来源有：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">enum UIImagePickerControllerSourceType : Int {\n    case PhotoLibrary\n    case Camera\n    case SavedPhotosAlbum\n}</code></pre>\n      </div>\n<p>默认是 <code class="language-text">UIImagePickerControllerSourceType.PhotoLibrary</code> 。</p>\n<p>如果你需要在多设备上使用 UIImagePickerController，最好在呈现前检测一下设备是否支持，比如有些设备没有摄像头，就不支持 <code class="language-text">.Camera</code> 。</p>\n<p>检测方式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">if UIImagePickerController.isSourceTypeAvailable(.Camera) {\n    print(&quot;camera available&quot;)\n}\nif UIImagePickerController.isSourceTypeAvailable(.PhotoLibrary) {\n    print(&quot;photo library available&quot;)\n}\nif UIImagePickerController.isSourceTypeAvailable(.SavedPhotosAlbum) {\n    print(&quot;saved photos album available&quot;)\n}</code></pre>\n      </div>\n<h2>创建并设置</h2>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">let imagePicker = UIImagePickerController()\nimagePicker.sourceType = UIImagePickerControllerSourceType.SavedPhotosAlbum\nimagePicker.allowsEditing = true\nimagePicker.delegate = self\npresentViewController(imagePicker, animated: true, completion: nil)</code></pre>\n      </div>\n<p>以上代码先创建了一个 UIImagePickerController 实例，然后设置了 <code class="language-text">sourceType</code>，<code class="language-text">allowsEditing</code> 为 <code class="language-text">true</code> 表示可以对图像进行编辑（选择图片后会出现一个框，你可以对图片进行操作），然后设置了其代理为 <code class="language-text">self</code>，代理等一下写，最后呈现出这个 UIImagePickerController 。</p>\n<h2>代理</h2>\n<p>第一个方法：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">optional func imagePickerController(_ picker: UIImagePickerController,\n      didFinishPickingMediaWithInfo info: [String : AnyObject])</code></pre>\n      </div>\n<p>这个方法在选取了图片后调用，info 是一个字典，可以获取你所选取的照片（也可以是影片等多媒体）的信息。</p>\n<p>键的值有如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">let UIImagePickerControllerMediaType: String\nlet UIImagePickerControllerOriginalImage: String\nlet UIImagePickerControllerEditedImage: String\nlet UIImagePickerControllerCropRect: String\nlet UIImagePickerControllerMediaURL: String\nlet UIImagePickerControllerReferenceURL: String\nlet UIImagePickerControllerMediaMetadata: String\nlet UIImagePickerControllerLivePhoto: String</code></pre>\n      </div>\n<p>具体信息可以看苹果官方文档，这里不再赘述。</p>\n<p><strong>注：</strong>我们有义务让UIImagePickerController从界面中消失。</p>\n<p>第二个方法：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">optional func imagePickerControllerDidCancel(_ picker: UIImagePickerController)</code></pre>\n      </div>\n<p>这个方法会在点击了取消按钮之后调用。</p>\n<h2>实例</h2>\n<p>下面这个例子是这样的，在主界面有一个按钮，点击了按钮之后出现 UIImagePickerController 的界面，选取一张图片之后显示在主界面上。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">import UIKit\n\nclass ViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {\n\n    let imageView = UIImageView()\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // 设置 imageView 的大小位置\n        imageView.frame = CGRect(origin: CGPoint(x: 0, y: view.bounds.size.height / 2), size: CGSize(width: view.bounds.size.width, height: view.bounds.size.height / 2))\n        // 图像超出时剪裁\n        imageView.clipsToBounds = true\n        imageView.contentMode = UIViewContentMode.ScaleAspectFill\n        view.addSubview(imageView)\n    }\n\n    override func didReceiveMemoryWarning() {\n        super.didReceiveMemoryWarning()\n        // Dispose of any resources that can be recreated.\n    }\n\n    @IBAction func showPickerViewSavedPic(sender: UIButton) {\n        let imagePicker = UIImagePickerController()\n        imagePicker.sourceType = UIImagePickerControllerSourceType.SavedPhotosAlbum\n        imagePicker.allowsEditing = true\n        imagePicker.delegate = self\n        presentViewController(imagePicker, animated: true, completion: nil)\n    }\n\n    func imagePickerController(picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : AnyObject]) {\n        let image = info[UIImagePickerControllerEditedImage] as! UIImage\n        imageView.image = image\n        dismissViewControllerAnimated(true, completion: nil)\n    }\n}</code></pre>\n      </div>\n<p><strong>注意：</strong> <code class="language-text">UIImageViewController</code> 实例的代理还要实现 <code class="language-text">UINavigationControllerDelegate</code></p>\n<p>如果有任何疑问的话，欢迎评论。</p>\n<h1>更新记录</h1>\n<p>2016年4月21日：增加“注意”项目</p>\n<h1>参考</h1>\n<ol>\n<li><a href="http://www.cocoachina.com/ios/20140923/9730.html">UIImagePickerController从拍照、图库、相册获取图片</a></li>\n</ol>',frontmatter:{title:"UIImagePickerController 学习笔记",date:"January 30, 2016",tags:["学习笔记","技术","开发","Swift","iOS"]}}},pathContext:{slug:"/note-of-uiimagepickercontroller/"}}}});
//# sourceMappingURL=path---posts-note-of-uiimagepickercontroller-1cebc3ab057958fb233f.js.map