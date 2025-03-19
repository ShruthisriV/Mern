import React, { useEffect, useState } from "react";
import { GetCurrentUser } from "../api/users";
import { useNavigate } from "react-router-dom";
import { message, Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { Header } from "antd/es/layout/layout";
import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { setUser } from "../redux/userSlice";

function ProtectedRoute({ children }) {
  const { user } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
    },

    {
      label: `${user ? user.name : ""}`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <span
            onClick={() => {
              if (user.role === 'admin') {
                navigate("/admin");
              } else if (user.role === 'partner') {
                navigate("/partner");
              } else {
                navigate("/profile");
              }
            }}
            >
              My Profile
            </span>
          ),
          icon: <ProfileOutlined />,
        },

        {
          label: (
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Log Out
            </Link>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  // const navItems = [
  //   {
  //     key: "1", 
  //     label: "Home",
  //     icon: <HomeOutlined />,
  //   },
  //   {
  //     key: "2", // Add this
  //     label: `${user ? user.name : ""}`,
  //     icon: <UserOutlined />,
  //     children: [
  //       {
  //         label: (
  //                     <span
  //                     onClick={() => {
  //                       if (user.role === 'admin') {
  //                         navigate("/admin");
  //                       } else if (user.role === 'partner') {
  //                         navigate("/partner");
  //                       } else {
  //                         navigate("/profile");
  //                       }
  //                     }}
  //                     >
  //                       My Profile
  //                     </span>
  //                   ),
  //                   icon: <ProfileOutlined />,
  //       },
  //       {
  //         label: (
  //           <Link
  //             to="/login"
  //             onClick={() => {
  //               localStorage.removeItem("token");
  //             }}
  //           >
  //             Log Out
  //           </Link>
  //         ),
  //         icon: <LogoutOutlined />,
  //       },
  //     ],
  //   },
  // ];

  const getValidUser = async () => {
    try {
      dispatch(showLoading());
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const response = await GetCurrentUser();
      if (response.message === "jwt expired") {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }
      dispatch(setUser(response.data));
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <>
        <Layout>
          <Header
            className="d-flex justify-content-between"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
              Book My Show
            </h3>
            <Menu theme="dark" mode="horizontal" items={navItems} />
          </Header>
          <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
            {children}
          </div>
        </Layout>
      </>
    )
  );
}

export default ProtectedRoute;
