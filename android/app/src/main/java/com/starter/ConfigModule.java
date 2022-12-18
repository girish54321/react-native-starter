package com.starter;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
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

    @ReactMethod
    public void iAmNewFun(){

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
