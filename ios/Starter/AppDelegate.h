/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, strong) RCTBridge *bridge;

@end
@implementation AppDelegate

- (void)goNativeStoryboard {

  UIViewController *vc = [UIStoryboard storyboardWithName:@"LoadingStoryboard" bundle:nil].instantiateInitialViewController;

  [UIView transitionWithView:self.window
                    duration:0.5
                     options: UITableViewRowAnimationFade
                  animations:^{ self.window.rootViewController = vc; }
                  completion:nil];

}

@end
