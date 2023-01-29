package com.starter;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.Map;
import java.util.HashMap;

public class ConfigModule extends ReactContextBaseJavaModule {

    String baseUrl;
    String env;

    ConfigModule(ReactApplicationContext context) {
        super(context);
        baseUrl = context.getResources().getString(R.string.base_url);
        env = context.getResources().getString(R.string.BUILD_ENV);
    }

    @Override
    public String getName() {
        return "RNConfigModule";
    }

    // @ReactMethod
    // public void iAmNewFun(){

    // }

    @ReactMethod
    // @ReactMethod(isBlockingSynchronousMethod = false)
    public void  getBuildInfo (Promise promise){
        WritableMap item = new WritableNativeMap();
        item.putString("BASE_URL",baseUrl);
        item.putString("BUILD_ENV",env);
        promise.resolve(item);
    }
    
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String,Object> con = new HashMap<>();
        // con.put("evn",BuildConfig.FLAVOR);
        con.put("BASE_URL",baseUrl);
        con.put("BUILD_ENV",env);
        return con;
    }
}
