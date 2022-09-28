--Script DB

-- Crear DB
USE [master]
GO

CREATE DATABASE [loymarkdb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'loymarkdb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\loymarkdb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'loymarkdb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\loymarkdb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [loymarkdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [loymarkdb] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [loymarkdb] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [loymarkdb] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [loymarkdb] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [loymarkdb] SET ARITHABORT OFF 
GO

ALTER DATABASE [loymarkdb] SET AUTO_CLOSE ON 
GO

ALTER DATABASE [loymarkdb] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [loymarkdb] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [loymarkdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [loymarkdb] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [loymarkdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [loymarkdb] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [loymarkdb] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [loymarkdb] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [loymarkdb] SET  ENABLE_BROKER 
GO

ALTER DATABASE [loymarkdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [loymarkdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [loymarkdb] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [loymarkdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [loymarkdb] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [loymarkdb] SET READ_COMMITTED_SNAPSHOT ON 
GO

ALTER DATABASE [loymarkdb] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [loymarkdb] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [loymarkdb] SET  MULTI_USER 
GO

ALTER DATABASE [loymarkdb] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [loymarkdb] SET DB_CHAINING OFF 
GO

ALTER DATABASE [loymarkdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [loymarkdb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [loymarkdb] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [loymarkdb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [loymarkdb] SET QUERY_STORE = OFF
GO

ALTER DATABASE [loymarkdb] SET  READ_WRITE 
GO

-- Crear Tabla Usuarios

USE [loymarkdb]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Usuarios](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [Nombre] [nvarchar](max) NOT NULL,
    [Apellido] [nvarchar](max) NOT NULL,
    [CorreoElectronico] [nvarchar](max) NOT NULL,
    [FechaDeNacimiento] [datetime2](7) NOT NULL,
    [NumeroDeTelefono] [bigint] NOT NULL,
    [PaisDeResidencia] [nvarchar](max) NOT NULL,
    [Contacto] [bit] NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

-- Crear Tabla Actividades

USE [loymarkdb]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Actividades](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [FechaDeCreacion] [datetime2](7) NOT NULL,
    [IdUsuario] [int] NOT NULL,
    [Actividad] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Actividades] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

-- INSERTs

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Santiago', 'Orellano', 'santiorellano7@gmail.com', '18-04-1997', 3534177575, 'ARG', 1);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Cristian', 'Ronaldo', 'cronaldo7@gmail.com', '18-01-1997', 3534787983, 'ARG', 1);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Lionel', 'Messi', 'lmessi10@gmail.com', '24-06-1987', 3534789451, 'BRA', 1);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Juan', 'Rodriguez', 'jrodriguez@gmail.com', '01-01-1995', 3534787989, 'ARG', 0);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Gonzalo', 'Oliver', 'goliver@gmail.com', '27-02-1997', 3535789123, 'ARG', 1);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Roman', 'Riquelme', 'jrriquelme@gmail.com', '10-10-1980', 3534101010, 'ARG', 0);

INSERT INTO [dbo].[Usuarios] ([Nombre], [Apellido], [CorreoElectronico], [FechaDeNacimiento], [NumeroDeTelefono], [PaisDeResidencia], [Contacto])
    VALUES ('Neymar', 'Jr', 'neymarjr@gmail.com', '05-02-1992', 3534112151, 'BRA', 0);