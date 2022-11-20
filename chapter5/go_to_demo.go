package main

import "fmt"

func main() {
	i := 0
loop:
	fmt.Println("hello")
	goto end
	i += 1
	if i < 10 {
		goto loop
	}
end:
	fmt.Println("End")
}
