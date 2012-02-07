Ext.data.JsonP.native_packaging({"title":"Native iOS Packaging","guide":"<h1>Sencha Touch 2 Native Packaging for iOS on Mac</h1>\n<p><strong>Contents</strong></p>\n<ul class='toc'>\n<li><a href='#!/guide/native_packaging-section-1'>Requirements</a></li>\n<li><a href='#!/guide/native_packaging-section-2'>Steps to package your application for iOS on Mac</a></li>\n<li><a href='#!/guide/native_packaging-section-3'>Step 4: Run the packager to create the packaged application</a></li>\n</ul>\n\n<h2 id='native_packaging-section-1'>Requirements</h2>\n\n<h3>Software</h3>\n\n<ul>\n<li>Mac OS X 10.6+</li>\n<li>Xcode (required for for iOS Simulator)</li>\n</ul>\n\n\n<h2 id='native_packaging-section-2'>Steps to package your application for iOS on Mac</h2>\n\n<ol>\n<li>Complete iOS provisioning on <a href=\"https://developer.apple.com/ios/manage/overview/index.action\">Apple iOS provisioning portal</a> including certificates and devices setup through the provisioning portal and Xcode.</li>\n<li>Install the packager, part of Sencha SDK Tools 2.0</li>\n<li>Create a packaging configuration file to be use with the native packager.</li>\n<li>Run the packager to create a packaged <application>.app.</li>\n</ol>\n\n\n<h3>Step 1: Complete iOS provisioning on Apple iOS provisioning portal for the application</h3>\n\n<p>Use the <a href=\"https://developer.apple.com/ios/manage/overview/index.action\">Apple iOS provisioning portal</a> to set up the appropriate development and distribution certifications and profiles. Create an App ID and finish provisioning your application. Please refer to the How-To section in the <a href=\"https://developer.apple.com/ios/manage/overview/index.action\">Apple iOS provisioning portal</a> for help.</p>\n\n<p><em>Note:</em> You will need to know your App ID and App Name to complete the packaging process.</p>\n\n<h3>Step 2: Install the packager</h3>\n\n<ul>\n<li>Run the <a href=\"http://www.sencha.com/products/sdk-tools/\">Sencha SDK Tools</a> installation: SenchaSDKTools (SenchaSDKTools-2.0.0-Beta)</li>\n<li>The <code>sencha</code> command that includes the package option will be installed to the specified location during installation (default: Applications/SenchaSDKTools-2.0.0-Beta/command).**</li>\n</ul>\n\n\n<h3>Step 3: Create a packaging configuration file to be use with the native packager.</h3>\n\n<p>The configuration file has the following format:</p>\n\n<pre><code>{\n    \"applicationName\": \"&lt;AppName&gt;\",\n    \"applicationId\": \"&lt;AppID&gt;\",\n    \"outputPath\": \"&lt;AppPackageOutputPath&gt;\",\n    \"iconName\": \"&lt;AppIconName&gt;\",\n    \"versionString\": \"&lt;AppVersion&gt;\",\n    \"webAppPath\": \"&lt;PathToWebApp&gt;\",\n    \"configuration\": \"&lt;Release | Debug&gt;\",\n    \"platform\": \"&lt;iOSSimulator | iOS&gt;\",\n    \"deviceType\": \"&lt;iPhone | iPad | Universal&gt;\",\n    \"certificateAlias\": \"&lt;(Optional)CertificateAlias&gt;\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ]\n}\n</code></pre>\n\n<p>Note: A configuration file template can be created by running the following command in the Terminal:</p>\n\n<pre><code>sencha package generate &lt;configTemplate.json&gt;\n</code></pre>\n\n<p><code>&lt;configTemplate.json&gt;</code> is the name of the configuration file.</p>\n\n<p><em>Note:</em> The <code>&lt;configTemplate.json&gt;</code> path or filename cannot contain any space.</p>\n\n<p>The following parameters are applicable to iOS packaging:</p>\n\n<pre><code>\"applicationName\":\"&lt;AppName&gt;\"\n</code></pre>\n\n<p>Both <code>AppName</code> and <code>AppID</code> can be found on the <a href=\"https://developer.apple.com/ios/manage/overview/index.action\">iOS provisioning portal</a> on the App IDs section. Here's an example App ID</p>\n\n<p><p class='screenshot'><img src='guides/native_packaging/idScreen.png' alt='App ID'><span>App ID</span></p></p>\n\n<p>This example uses the following:</p>\n\n<ul>\n<li>AppName: Sencha Touch 2 Packaging</li>\n<li>AppID: com.Sencha.Touch2Packaging</li>\n</ul>\n\n\n<p><em>Note:</em> the App ID is the same as the one you put in the Identifier field in Xcode.</p>\n\n<p>This is the output location of the packaged application, <code>&lt;application.app&gt;</code>:</p>\n\n<pre><code>\"applicationId\":\"&lt;AppID&gt;\"\n\n\"outputPath\":\"&lt;AppPackageOutputPath&gt;\"\n</code></pre>\n\n<p>And this is the icon file to be used for your application:</p>\n\n<pre><code>\"iconName\":\"&lt;AppIconName&gt;\"\n</code></pre>\n\n<p><em>Note:</em> Retina icon should be specified with <code>@2x</code> at the end of the icon name. A regular icon name looks like <code>icon.png</code>, while a retina icon looks like <code>(regular) and</code>icon@2x.png<code>`. If a retina icon with\nthe</code><Icon Name>@2x.png` exists, the packager will include the retina icon.</p>\n\n<p><em>Note:</em> Refer to the <a href=\"http://developer.apple.com/library/ios/%23documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BuildTimeConfiguration/BuildTimeConfiguration.html%23//apple_ref/doc/uid/TP40007072-CH7-SW1\">iOS icon guideline</a> for further information on icon file specifications.</p>\n\n<p>You'll also need to do the following:</p>\n\n<ul>\n<li><p>Specify the version of the application, like this:</p>\n\n<p> \"versionString\":\"<AppVersion>\"</p></li>\n<li><p>Indicate the path of the web application to be packaged:</p>\n\n<p> \"webAppPath\":\"<PathToWebApp>\"</p></li>\n<li><p>Specify the build type, either Release or Debug:</p>\n\n<p> \"configuration\":\"<Release | Debug>\"</p></li>\n<li><p>Specify if the build is for the iOS simulator (iOSSimulator) or for the device\n(iOS):</p>\n\n<p>  \"platform\":\"<Simulator | iOS>\"</p></li>\n</ul>\n\n\n<p><em>Note:</em> the iOS simulator cannot run a signed build. A signed build can only be run on the device.</p>\n\n<ul>\n<li>Specify device type:</li>\n</ul>\n\n\n<p>  \"deviceType\":\"<iPhone | iPad | Universal>\"</p>\n\n<ul>\n<li><p>Specify available options, either <code>iPhone</code> for iPhone applications, <code>iPad</code> for iPad applications, or <code>Universal</code> for both iPhone and iPad applications</p></li>\n<li><p>Optional: Specify a specific Certificate Alias to use for signing your application:</p>\n\n<p> \"certificateAlias\":\"&lt;(Optional)CertificateAlias>\"</p></li>\n</ul>\n\n\n<p><em>Note:</em> If this is omitted, the default certificate used is the one you setup in iOS Provisioning Portal.</p>\n\n<ul>\n<li><p>Optional: specify the orientations of the application from <code>portrait</code>, <code>landscapeLeft</code>, <code>landscapeRight</code>, and <code>portraitUpsideDown</code>, like this:</p>\n\n<p> \"orientations\": [</p>\n\n<pre><code> \"portrait\",\n \"landscapeLeft\",\n \"landscapeRight\",\n \"portraitUpsideDown\"\n</code></pre>\n\n<p> ]</p></li>\n</ul>\n\n\n<p><em>Note:</em> If this omitted, the default orientations are all four orientations.</p>\n\n<p><strong>Sample debug configuration file</strong></p>\n\n<pre><code>{\n    \"applicationName\":\"Sencha Touch 2 Packaging\",\n    \"applicationId\":\"com.sencha.touch2packaing\",\n    \"iconName\":\"icon.png\",\n    \"versionString\":\"1.0\",\n    \"outputPath\":\"~/Desktop/STBuild-iOS\",\n    \"webAppPath\":\"~/Desktop/www/\",\n    \"configuration\":\"Debug\",\n    \"platform\":\"iOSSimulator\",\n    \"deviceType\":\"iPhone\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ]\n}\n</code></pre>\n\n<p><strong>Sample release configuration file</strong></p>\n\n<pre><code>{\n    \"applicationName\":\"Sencha Touch 2 Packaging\",\n    \"applicationId\":\"com.sencha.touch2packaing\",\n    \"iconName\":\"icon.png\",\n    \"versionString\":\"1.0\",\n    \"outputPath\":\"~/Desktop/STBuild-iOS\",\n    \"webAppPath\":\"~/Desktop/www/\",\n    \"configuration\":\"Release\",\n    \"platform\":\"iOS\",\n    \"deviceType\":\"iPhone\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ]\n}\n</code></pre>\n\n<h2 id='native_packaging-section-3'>Step 4: Run the packager to create the packaged application</h2>\n\n<p><strong>Package a debug application and run it on the iOS simulator</strong></p>\n\n<p><em>Prerequisite:</em> The Platform and Configuration setting needs to be set in the config file, for example:</p>\n\n<pre><code>platform: iOSSimulator\nconfiguration: Debug\n</code></pre>\n\n<p>If Platform and Configuration are not set, iOS will not run the application correctly.</p>\n\n<p>To package a debug/unsigned application to run on the iOS simulator, issue the following command in Terminal:</p>\n\n<pre><code>sencha package run &lt;configFile.json&gt;\n</code></pre>\n\n<p>The iOS simulator with the application running will launch after successful execution of this command. The <code>deviceType</code> identifier  -- <code>iPhone</code> or <code>iPad</code> -- triggers the appropriate simulator.\n.</p>\n\n<p><strong>Packaging the application to deploy on the iOS device</strong></p>\n\n<p>To package a signed application to run on the device, issue the following command in the terminal:</p>\n\n<pre><code>sencha package &lt;configFile.json&gt;\n</code></pre>\n\n<p>Note: an <code>&lt;AppName.app&gt;</code> is created in the specified output location. This is the application that you can use to deploy to the iOS device.</p>\n\n<p><strong>See Also</strong></p>\n\n<ol>\n<li><a href=\"https://developer.apple.com/ios/manage/overview/index.action\">Apple iOS provisioning portal</a></li>\n<li><a href=\"http://developer.apple.com/library/ios/%23documentation/userexperience/conceptual/mobilehig/IconsImages/IconsImages.html\">iOS Icon guideline</a></li>\n</ol>\n\n"});