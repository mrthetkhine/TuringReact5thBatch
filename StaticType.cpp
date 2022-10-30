#include <iostream>

using namespace std;


int main()
{
    int a = 24;
    cout<<"A is "<<a<<endl;

    //a = "Hello";
    a ++;
    int *b = &a;
    cout<<" B is "<< b<<endl;
    b ++;
    cout<<" B is "<< b<<endl;
    cout<<"A is "<<a<<endl;
}
