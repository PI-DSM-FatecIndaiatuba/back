-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER,
    "conteudo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
