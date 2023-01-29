//
//  RNConfigModule.swift
//  Starter
//
//  Created by neosoft on 06/01/23.
//  Copyright © 2023 Facebook. All rights reserved.
//

import Foundation

@objc(RNConfigModule)
class RNConfigModule: NSObject {
  private var count = 1
  let BASE_URL = Bundle.main.object(forInfoDictionaryKey: "BaseURL") as? String
  let BUILD_ENV = Bundle.main.object(forInfoDictionaryKey: "BuildEnvironment") as? String

//  @objc
//  func getBuildInfo (_ callback:RCTResponseSenderBlock) {
//    let BASE_URL = Bundle.main.object(forInfoDictionaryKey: "ServerUrl") as? String
//    let BUILD_ENV = Bundle.main.object(forInfoDictionaryKey: "BUILD_ENV") as? String
//    let parameters: [String: Any] = [
//      "BASE_URL" : BASE_URL ?? "NA",
//      "BUILD_ENV": BUILD_ENV ?? "NA",
//    ]
//    callback([parameters])
//  }
  @objc
  func getBuildInfo (_ resolve:RCTPromiseResolveBlock,
                     reject:RCTPromiseRejectBlock){
    let parameters: [String: Any] = [
      "BASE_URL" : BASE_URL ?? "NA",
      "BUILD_ENV": BUILD_ENV ?? "NA",
    ]
    resolve(parameters);
  }
  
  @objc
  static func requiresMainQueueSetup () -> Bool {
    return true
  }
  
  @objc
  func constantsToExport() -> [AnyHashable: Any]!{
     let parameters: [String: Any] = [
       "BASE_URL" : BASE_URL ?? "NA",
       "BUILD_ENV": BUILD_ENV ?? "NA",
     ]
     return parameters;
   }
}
