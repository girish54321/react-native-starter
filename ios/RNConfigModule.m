//
//  RCTCalendarModule.m
//  Starter
//
//  Created by Girish Parate on 20/11/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import <React/RCTLog.h>
#import "RNConfigModule.h"

@implementation RNConfigModule

// To export a module named ReactOneCustomMethod
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(deviceName);
}

- (NSDictionary *)constantsToExport
{
// return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BuildEnvironment"];
  NSString* buildBaseUrl = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"BaseURL"];
    return @{
      @"BUILD_ENV": buildEnvironment,
      @"BASE_URL": buildBaseUrl
    };
}
@end
