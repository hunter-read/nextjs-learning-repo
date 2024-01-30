module.exports = {
    testPathForConsistencyCheck: 'some/example.test.ts',

    resolveSnapshotPath: (testPath: string, snapshotExtension: string) =>
        testPath + snapshotExtension,

    resolveTestPath: (snapshotFilePath: string, snapshotExtension: string) =>
        snapshotFilePath.replace(snapshotExtension, "").replace("__snapshots__/", ""),
}