type Input = {
    title: string;
    placeholder: string;
}

export interface LangMock {
    header?: {
        title: string
    };
    main?: {
        createTasks: {
            title: string;
            form: {
                inputs: {
                    firstInput: Input
                    secondInput: Input
                };
                buttons: {
                    firstButton: {
                        label: string
                    }
                };
            }
        },
        manageTasks: {
            title: string;
            options: {
                filter: {
                    title: string;
                    select: {
                        firstOption: string;
                        secondOption: string;
                        thirdOption: string;
                    }
                };
                cleanAll: {
                    label: string;
                };
            }
            noContent: {
                title: string;
                states: {
                    slope: string;
                    complete: string;
                    all: string;
                }
            },
            content: {
                status: {
                    slope: string;
                    complete: string
                };
                buttons: {
                    completedButton: {
                        label: string
                    };
                    deleteButton: {
                        label: string
                    }
                }
            }
        }
    }
}