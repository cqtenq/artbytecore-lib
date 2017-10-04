'use strict';

var artbytecore = module.exports;

// module information
artbytecore.version = 'v' + require('./package.json').version;
artbytecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of artbytecore-lib found. ' +
      'Please make sure to require artbytecore-lib and check that submodules do' +
      ' not also include their own artbytecore-lib dependency.';
    throw new Error(message);
  }
};
artbytecore.versionGuard(global._artbytecore);
global._artbytecore = artbytecore.version;

// crypto
artbytecore.crypto = {};
artbytecore.crypto.BN = require('./lib/crypto/bn');
artbytecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
artbytecore.crypto.Hash = require('./lib/crypto/hash');
artbytecore.crypto.Random = require('./lib/crypto/random');
artbytecore.crypto.Point = require('./lib/crypto/point');
artbytecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
artbytecore.encoding = {};
artbytecore.encoding.Base58 = require('./lib/encoding/base58');
artbytecore.encoding.Base58Check = require('./lib/encoding/base58check');
artbytecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
artbytecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
artbytecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
artbytecore.util = {};
artbytecore.util.buffer = require('./lib/util/buffer');
artbytecore.util.js = require('./lib/util/js');
artbytecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
artbytecore.errors = require('./lib/errors');

// main bitcoin library
artbytecore.Address = require('./lib/address');
artbytecore.Block = require('./lib/block');
artbytecore.MerkleBlock = require('./lib/block/merkleblock');
artbytecore.BlockHeader = require('./lib/block/blockheader');
artbytecore.HDPrivateKey = require('./lib/hdprivatekey.js');
artbytecore.HDPublicKey = require('./lib/hdpublickey.js');
artbytecore.Networks = require('./lib/networks');
artbytecore.Opcode = require('./lib/opcode');
artbytecore.PrivateKey = require('./lib/privatekey');
artbytecore.PublicKey = require('./lib/publickey');
artbytecore.Script = require('./lib/script');
artbytecore.Transaction = require('./lib/transaction');
artbytecore.URI = require('./lib/uri');
artbytecore.Unit = require('./lib/unit');

// dependencies, subject to change
artbytecore.deps = {};
artbytecore.deps.bnjs = require('bn.js');
artbytecore.deps.bs58 = require('bs58');
artbytecore.deps.Buffer = Buffer;
artbytecore.deps.elliptic = require('elliptic');
artbytecore.deps.scryptsy = require('scryptsy');
artbytecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
artbytecore.Transaction.sighash = require('./lib/transaction/sighash');
