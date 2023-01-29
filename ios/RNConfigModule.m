//
//  RNConfigModule.m
//  Starter
//
//  Created by neosoft on 06/01/23.
//  Copyright © 2023 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNConfigModule,NSObject);

//RCT_EXTERN_METHOD(getBuildInfo:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(getBuildInfo:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end
