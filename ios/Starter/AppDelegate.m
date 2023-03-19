/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>

@interface AppDelegate()  <RCTBridgeDelegate>

// keep a reference to the React Native VC
@property (nonatomic, strong) UIViewController *reactNativeViewController;

@end


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
//  bridge.delegate = self;
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"Starter"
                                            initialProperties:nil];

  if (@available(iOS 13.0, *)) {
      rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
      rootView.backgroundColor = [UIColor whiteColor];
  }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  // keep a reference to the React Native VC
  // self.reactNativeViewController = [[UIViewController alloc] init];
  // self.reactNativeViewController.view = rootView;
  // self.window.rootViewController = self.reactNativeViewController;
  // [self.window makeKeyAndVisible];
  // [self goNativeStoryboard];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];


  return YES;
}

- (void)bridgeDidFinishLoading:(RCTBridge *)bridge {
    NSLog(@"React Native has finished loading");
//    bridge.delegate = self;
    [self goNativeStoryboard];
}

- (void)goNativeStoryboard {

  UIViewController *vc = [UIStoryboard storyboardWithName:@"LoadingStoryboard" bundle:nil].instantiateInitialViewController;

  [UIView transitionWithView:self.window
                    duration:0.5
                     options: UITableViewRowAnimationFade
                  animations:^{ self.window.rootViewController = vc; }
                  completion:nil];

}

RCT_EXPORT_METHOD(goToReactNative) {
  [self.window.rootViewController dismissViewControllerAnimated:TRUE completion:nil];
}

//* Code push Changes
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  #if DEBUG
//    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
  #else
    return [CodePush bundleURL];
  #endif
}

@end
