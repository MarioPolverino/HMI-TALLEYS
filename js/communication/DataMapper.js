function readBits(integer) {
    var bits = [];
    var mask = 1;
        for (var i = 0; i < 16; i++) { // Assuming 32-bit integers
            bits.push(integer & mask ? 1 : 0);
            mask <<= 1;
        }
        return bits
    }      

    function decodedString(Stringa){
      var encodedString =Stringa;
      var elem = document.createElement('textarea');
      elem.innerHTML = encodedString;
      return Number(elem.value);
    }

    const DataMapper = {
        mapDataToObject: function(data) {
          const decodedArray2 = decodedString(data.Array_2);
          const bits = readBits(decodedArray2);

          const decodedArray3 = decodedString(data.Array_3);
      
          return {
            Array_1: data.Array_1,
            Array_2: {
              StatusMode: bits[0],
              CarrierInPosition: bits[1],
              CarrierIsMoving: bits[2],
              CarrierIsFault: bits[3],
              LifterInPositionUp: bits[4],
              LifterInPositionDown: bits[5],
              LifterIsMoving: bits[6],
              LifterIsFault: bits[7],
              BabyOnBoard: bits[8],
              BabyLimitLeft: bits[9],
              BabyLimitRight: bits[10],
              ModeSwitch: bits[11],
              PalletStopLeft: bits[12],
              PalletStopRight: bits[13],
              PalletLimitLeft: bits[14],
              PalletLimitRight: bits[15]
            },
            ActualStep: decodedArray3,
            Array_4: data.Array_4,
            Array_5: data.Array_5,
            Array_6: data.Array_6,
            Array_7: data.Array_7
          };
        }
      };

      export { DataMapper };