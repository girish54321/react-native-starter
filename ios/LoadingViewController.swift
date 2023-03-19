//
//  LoadingViewController.swift
//  Starter
//
//  Created by Girish Parate on 18/03/23.
//  Copyright © 2023 Facebook. All rights reserved.
//

import UIKit

class LoadingViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
      DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
//        if let appDelegate = UIApplication.sharedApplication.delegate as? AppDelegate {
//          appDelegate.
//             }
      }

        // Do any additional setup after loading the view.
    }
  
  
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
