#include <iostream>

int main(){
    int args[] = {2, 3};
    auto len = sizeof(args) / sizeof(int);
    int sum_of_args = 0;
    for (int i = 0; i < len; i++) {

        sum_of_args = sum_of_args + args[i];

    }
    std::cout << sum_of_args << std::endl;
}
