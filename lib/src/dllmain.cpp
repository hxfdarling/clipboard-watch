// dllmain.cpp : 定义 DLL 应用程序的入口点。
#include "stdafx.h"
#ifdef CLIPBOARD_EXPORTS
#define CLIPBOARD_API extern "C"  __declspec(dllexport)
#else
#define CLIPBOARD_API __declspec(dllimport)
#endif
typedef void(*HELP_CALLBACK)(int); // 回调函数指针

HINSTANCE hInstance = NULL; //DLL实例句柄
HANDLE hThread = NULL;

#pragma data_seg("clipboard")
HELP_CALLBACK h_cb;
int g_cb = 0;
int h_time = 10;
#pragma data_seg()
#pragma comment(linker,"/section:clipboard,rws")

BOOL APIENTRY DllMain(HINSTANCE hinstDLL,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
					 )
{
	hInstance = hinstDLL;
	switch (ul_reason_for_call)
	{
		case DLL_PROCESS_ATTACH:
		case DLL_THREAD_ATTACH:
			break;
		case DLL_THREAD_DETACH:
			break;
		case DLL_PROCESS_DETACH:
			if (hThread != NULL) {
				CloseHandle(hThread);
			}
			break;
	}
	return TRUE;
}

DWORD CALLBACK ThreadProc(PVOID pvoid) {
	int old = 0;
	while (true) {
		Sleep(h_time);
		g_cb = GetClipboardSequenceNumber();
		if (g_cb > old) {
			old = g_cb;
			h_cb(g_cb);
		}
	}
	return 0;
}
// 这是导出函数
void watcher(HELP_CALLBACK cb,int time)
{
	h_time =time<10?10:time;
	h_cb = cb;
	
	DWORD dwThreadId;
	// 创建线程  
	hThread = CreateThread(NULL, 0, ThreadProc, 0, 0, &dwThreadId);
}
