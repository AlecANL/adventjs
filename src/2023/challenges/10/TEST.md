<style>
    header {
        display: flex;
        justify-content: space-between;
    }

    span {
        color #fdc138;
    }
</style>
<div>
    <header>
        <h1>Challenge #10: 🎄 Create your own Christmas tree</h1>
        <span>EASY</span>
    </header>
    <p>
        What an idea Sam Elfman has had! He wants to offer a service that creates a <span>customized Christmas tree</span> 🎄 in a matter of seconds.
    </p>

To create it, we are given a string to form the tree and a number that indicates its height.

Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:
</div>
