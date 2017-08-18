module.exports = function(io) {

    io.sockets.on('connection', function(socket) {
       console.log('connected', socket.id)

        socket.on('drip', () => {
            socket.emit('drop');
            console.log('ping recieved')
        });

        socket.on('change', function (op) {
            if (op.origin === '+input' || op.origin === 'paste' || op.origin === '+delete') {
                socket.broadcast.emit('change', op);
            }
        });

    });
};
