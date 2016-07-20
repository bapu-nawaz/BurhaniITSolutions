package gks.fragment;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import gks.config.C;
import gks.schoolapp.MainActivity;
import gks.schoolapp.R;

/**
 * Created by nawaz on 20/07/2016.
 */
public class Login extends Fragment implements View.OnClickListener{

    Button login;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return init(inflater, container);
    }

    private View init(LayoutInflater inflater, ViewGroup container) {
        View view = inflater.inflate(R.layout.activity_login, container, false);
        initializeVariables();
        linkXML(view);
        onClickListeners();

        return view;
    }

    private void initializeVariables() {

    }

    private void linkXML(View view) {
        login = (Button) view.findViewById(R.id.login_button);
    }

    private void onClickListeners() {
        login.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.login_button :
                MainActivity.replaceFragment(C.LOGIN, null, getFragmentManager());
                break;
        }
    }
}
