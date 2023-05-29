"use strict";(self.webpackChunkpersonal_web_site=self.webpackChunkpersonal_web_site||[]).push([[25],{8562:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F},default:function(){return u}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"Table of contents"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-toc"},"# This code block gets replaced with the TOC\n")),"\n",a.createElement(t.h2,null,"Performance evaluation"),"\n",a.createElement(t.h3,null,"Runtime"),"\n",a.createElement(t.p,null,"One of the methods for scpecifying the runtime of an application (Program?) is to use SECONDS valriable."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"SECONDS=0; sleep 3; echo $SECONDS;\n")),"\n",a.createElement(t.h2,null,"Condition"),"\n",a.createElement(t.h3,null,"Conditional structure"),"\n",a.createElement(t.p,null,"The general structure of a conditional statement in Bash is as follows:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'val=14\nif test $val -eq 14 ; then\n    echo "exit value of a command"\nelif (( $val + 6 > 20 )); then\n    echo "Mathematical expressions"\nelif [ $val -gt 10 ] ; then\n    echo "single bracket (POSIX standard)"\nelif [[ $val -gt 10 ]]; then\n    echo "double bracket (Bash and some others)"\nelse\n    echo "else condition"\nfi\n')),"\n",a.createElement(t.h3,null,"Comparison conditions"),"\n",a.createElement(t.h4,null,"File Operators"),"\n",a.createElement(t.p,null,"The conditional operators for checking the status of files are visible in the table below:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"center"},"Operator"),a.createElement(t.th,{align:"left"},"Example"),a.createElement(t.th,{align:"left"},"Description"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-e")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-e $fileName")),a.createElement(t.td,{align:"left"},"Checks if a file exists.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-d")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-d $directoryName")),a.createElement(t.td,{align:"left"},"Checks if a file exists and it is a directory.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-f")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-f $fileName")),a.createElement(t.td,{align:"left"},"Checks if a file exists and it is a regular file.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-h")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-h $linkName")),a.createElement(t.td,{align:"left"},"Checks if a file exists and it is a symbolic link.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-r")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-r $fileName")),a.createElement(t.td,{align:"left"},"Checks if a file is readable.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-W")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-W $fileName")),a.createElement(t.td,{align:"left"},"Checks if a file is writable.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-X")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-X $fileName")),a.createElement(t.td,{align:"left"},"Checks if a file is executable.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-s")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-S $fileName")),a.createElement(t.td,{align:"left"},"Checks if size of a file is non-zero.")))),"\n",a.createElement(t.h4,null,"String Operators"),"\n",a.createElement(t.p,null,"Conditional operators for comparing strings is visible in the table below:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"center"},"Operator"),a.createElement(t.th,{align:"center"},"Example"),a.createElement(t.th,{align:"left"},"Description"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-z")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-z $str")),a.createElement(t.td,{align:"left"},"Check if the length of the string is zero.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-n")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-n $str")),a.createElement(t.td,{align:"left"},"Check if the length of the string is not zero.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"==")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$str1 == $str2")),a.createElement(t.td,{align:"left"},"Check if the two strings are the same.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"!=")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$str1 != $str2")),a.createElement(t.td,{align:"left"},"Check if the two strings are not the same.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,">")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$str1 > $str2")),a.createElement(t.td,{align:"left"},"Check if str1 is lexicographically greater than str2.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"<")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$str1 < $str2")),a.createElement(t.td,{align:"left"},"Check if str1 is lexicographically less than str2.")))),"\n",a.createElement(t.h4,null,"Arithmatic Operators"),"\n",a.createElement(t.p,null,"Arithmatic comparisons can be performed using the following operators:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"center"},"Operator"),a.createElement(t.th,{align:"center"},"Example"),a.createElement(t.th,{align:"left"},"Description"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-eq")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -eq $int2")),a.createElement(t.td,{align:"left"},"Check if int1 and int2 are equal.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-ne")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -ne $int2")),a.createElement(t.td,{align:"left"},"Check if int1 and int2 are not equal.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-gt")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -gt $int2")),a.createElement(t.td,{align:"left"},"Check if int1 is greater than int2.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-ge")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -ge $int2")),a.createElement(t.td,{align:"left"},"Check if int1 is greater than or equal to int2.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-lt")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -lt $int2")),a.createElement(t.td,{align:"left"},"Check if int1 is less than int2.")),a.createElement(t.tr,null,a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"-le")),a.createElement(t.td,{align:"center"},a.createElement(t.code,null,"$int1 -le $int2")),a.createElement(t.td,{align:"left"},"Check if int1 is less than or equal to int2.")))),"\n",a.createElement(t.h3,null,"Conditional execution"),"\n",a.createElement(t.p,null,"If execution of the first command was successfull, the second command will be executed:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'true && echo "this message should show"\n')),"\n",a.createElement(t.p,null,"If a command encounters an error, another command will be executed:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'false || echo "this message should show"\n')),"\n",a.createElement(t.p,null,"If the previous command or function returned an error code, the next command will be executed:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'false\n[[ $? -ne 0 ]] && echo "this message should show"\n')),"\n",a.createElement(t.h2,null,"Loops"),"\n",a.createElement(t.p,null,"The following two loops have the same functionality:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'for i in `seq 1 10`\ndo\n    echo "\\$i is $i"\ndone\n\nfor s in foo bar baz\ndo\n    echo $s\ndone\n\nfor (( i = 0; i < 10; i++ ))\ndo\n    echo "\\$i is $i"\ndone\n')),"\n",a.createElement(t.h2,null,"Working with arrays"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'array=(zero one two three)\necho "${array[0]}"          # shows the first element\necho "${array[-1]}"         # shows the last element\necho "${array[@]}"          # shows all elements\necho "${array[@]:1:2}"      # shows two elements (:2), starting from element with index of 1 (which is the 2nd element (:1))\narray[4]=\'fifth element\'    # inserts an element at index 4\necho "${array[4]}"\narray+=(\'sixth\')            # appends an element to array\nunset -v \'array[2]\'         # deletes element with index of 2 from array\narray=("${array[@]}")       # re-indexing an array\necho "${#array[@]}"         # shows the length of array\n')),"\n",a.createElement(t.p,null,"To add an element to index 3 of an array, use the following code:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'array=("${array[@]:0:2}" \'2.5\' "${array[@]:2}")\necho "${array[2]}" #output: new\necho "${array[@]}"\n')),"\n",a.createElement(t.p,null,"Extract an array from a string(?):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'theStr="Zero,One,Two"\narray=(${theStr//,/ })\necho ${array[0]}\necho ${array[2]}\n')),"\n",a.createElement(t.p,null,"Reading elements of an array:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'array=(1 2 3 4)\n# foreach loop\nfor y in "${array[@]}"; do\n    # act on $y\n    echo "$y"\ndone\n\n# for loop with index\nfor ((idx=0; idx < ${#array[@]}; ++idx)); do\n    # act on ${array[$idx]}\n    echo "${array[$idx]}"\ndone\n')),"\n",a.createElement(t.p,null,"Recieving the output of a command as an array, and then reading that array using Foreach loop(?):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'array=($(tr \',\' \' \' <<<"0,1,2,3,4"))\nfor y in "${array[@]}"; do\n    echo "$y"\ndone\n')),"\n",a.createElement(t.p,null,"Filling an array based on the output of a command:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'while read -r; do\n    #array+=("$REPLY")     # Array append\n    array[$i]="$REPLY"     # Assignment by index\n    let i++                # Increment index\ndone < <(seq 1 10)  # command substitution\necho ${array[@]}    # output: 1 2 3 4 5 6 7 8 9 10\n')),"\n",a.createElement(t.h2,null,"Working with Map (Associative Array)"),"\n",a.createElement(t.p,null,"The first step is to create a ",a.createElement(t.em,null,"map"),"(?):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'declare -A mp       # declare (This line is mandatory)\nmp[hello]=world     # insert\nmp["a long key"]=v  # insert with a long key\necho ${mp[hello]}   # access\necho "${!mp[@]}"    # access all keys\necho "${mp[@]}"     # access all values\necho "${#mp[@]}"    # count of elements in a map\n\nfor key in "${!mp[@]}"; do # Iterate Over map\n    echo "Key:   ${key}"\n    echo "Value: ${mp[$key]}"\ndone\n\nunset mp            # destroy a map/array\n')),"\n",a.createElement(t.h2,null,"working with file:"),"\n",a.createElement(t.p,null,"Reading a file line by line and converting it into an array:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"IFS=$'\\n' read -r -a arr < file\n")),"\n",a.createElement(t.p,null,"Reading an entire file until reaching an empty line:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'while read line || [ -n "$line" ]; do\n    echo $line\ndone < file\n')),"\n",a.createElement(t.h2,null,"Processing input parameters"),"\n",a.createElement(t.p,null,"If no parameter is passed to ",a.createElement(t.em,null,"for")," loop, it will be executed on the input file.\nThe following two loops have the same results:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'for arg; do\n    echo arg=$arg\ndone\n\nfor arg in "$@"; do\n    echo arg=$arg\ndone\n')),"\n",a.createElement(t.p,null,"The following code from ",a.createElement(t.a,{href:"https://stackoverflow.com/a/16496491"},"stackoverflow")," demonstrates various\nuse casess for utilizing ",a.createElement(t.em,null,"getopts")," for processing input parameters:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'#!/bin/bash\nusage() { echo "Usage: $0 [-s <45|90>] [-p <string>]" 1>&2; exit 1; }\n\nwhile getopts ":s:p:" o; do\n    case "${o}" in\n        s)\n            s=${OPTARG}\n            ((s == 45 || s == 90)) || usage\n            ;;\n        p)\n            p=${OPTARG}\n            ;;\n        *)\n            usage\n            ;;\n    esac\ndone\nshift $((OPTIND-1))\n\nif [ -z "${s}" ] || [ -z "${p}" ]; then\n    usage\nfi\n')))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(8195),o=n(3897),m=n(6587),s=n(8071);const d=e=>{var t,n,l,r;let{data:c,pageContext:s,children:d}=e;return a.createElement(o.Z,{pageContext:s},a.createElement(i.Z,null,d),(null===(t=c.mdx)||void 0===t||null===(n=t.fields)||void 0===n?void 0:n.slugTagList)&&a.createElement("div",{className:"mt-32"},a.createElement("p",{className:"mt-8 text-center text-secondary"},"Tags of this Post:"),a.createElement(m.P,{tags:null===(l=c.mdx)||void 0===l||null===(r=l.fields)||void 0===r?void 0:r.slugTagList})))};function u(e){return a.createElement(d,e,a.createElement(c,e))}},6587:function(e,t,n){n.d(t,{P:function(){return r}});var l=n(7294),a=n(1883);var r=e=>{let{tags:t,isCenter:n=!0}=e;return l.createElement("ul",{className:"flex flex-wrap items-baseline mt-2 ms-1 md:mt-0 "+(n?"justify-center":"justify-start")},null==t?void 0:t.map((e=>l.createElement("li",{key:null==e?void 0:e.tag,className:"z-10 inline-block px-2 m-1 text-sm border-2 rounded-full shadow-sm bg-nav text-primary"},l.createElement(a.Link,{to:""+(null==e?void 0:e.slug)},"#",null==e?void 0:e.tag)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-data-blog-bash-cheatsheet-index-en-mdx-14e7442586a26c68e942.js.map